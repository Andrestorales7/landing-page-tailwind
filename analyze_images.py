#!/usr/bin/env python3
import os
import re
import subprocess
from collections import defaultdict

# Obtener todas las imágenes del proyecto
def get_all_images():
    result = subprocess.run([
        'find', '/home/andres/Proyectos/landing-page-tailwind/public/images', '-type', 'f',
        '(', '-iname', '*.jpg', '-o', '-iname', '*.jpeg', '-o', '-iname', '*.png', 
        '-o', '-iname', '*.webp', '-o', '-iname', '*.avif', '-o', '-iname', '*.svg', ')'
    ], capture_output=True, text=True)
    
    images = []
    for line in result.stdout.strip().split('\n'):
        if line:
            # Convertir ruta absoluta a ruta relativa desde public
            relative_path = line.replace('/home/andres/Proyectos/landing-page-tailwind/public', '')
            images.append(relative_path)
    return images

# Buscar referencias de imágenes en el código
def get_image_references():
    result = subprocess.run([
        'grep', '-r', '-h', '/images/', 
        '/home/andres/Proyectos/landing-page-tailwind',
        '--include=*.tsx', '--include=*.ts', '--include=*.js', '--include=*.jsx'
    ], capture_output=True, text=True)
    
    references = set()
    for line in result.stdout.split('\n'):
        # Buscar patrones como '/images/...' 
        matches = re.findall(r'["\']([/]?images/[^"\']*)["\']', line)
        for match in matches:
            if not match.startswith('/'):
                match = '/' + match
            references.add(match)
    
    return references

# Obtener tamaños de archivos
def get_file_sizes():
    result = subprocess.run([
        'find', '/home/andres/Proyectos/landing-page-tailwind/public/images', '-type', 'f',
        '(', '-iname', '*.jpg', '-o', '-iname', '*.jpeg', '-o', '-iname', '*.png', 
        '-o', '-iname', '*.webp', '-o', '-iname', '*.avif', '-o', '-iname', '*.svg', ')',
        '-exec', 'ls', '-lh', '{}', ';'
    ], capture_output=True, text=True)
    
    sizes = {}
    for line in result.stdout.strip().split('\n'):
        if line:
            parts = line.split()
            if len(parts) >= 9:
                size = parts[4]
                path = ' '.join(parts[8:])
                relative_path = path.replace('/home/andres/Proyectos/landing-page-tailwind/public', '')
                sizes[relative_path] = size
    
    return sizes

def parse_size(size_str):
    """Convertir tamaño a bytes para comparación"""
    if size_str.endswith('K'):
        return float(size_str[:-1]) * 1024
    elif size_str.endswith('M'):
        return float(size_str[:-1]) * 1024 * 1024
    elif size_str.endswith('G'):
        return float(size_str[:-1]) * 1024 * 1024 * 1024
    else:
        return float(size_str)

def main():
    print("📸 ANÁLISIS DE IMÁGENES DEL PROYECTO")
    print("=" * 50)
    
    # Obtener datos
    all_images = get_all_images()
    references = get_image_references()
    sizes = get_file_sizes()
    
    print(f"\n📊 RESUMEN:")
    print(f"Total de imágenes: {len(all_images)}")
    print(f"Referencias encontradas: {len(references)}")
    
    # Imágenes no utilizadas
    unused_images = []
    for img in all_images:
        if img not in references:
            unused_images.append(img)
    
    print(f"\n🚫 IMÁGENES NO UTILIZADAS ({len(unused_images)}):")
    if unused_images:
        for img in sorted(unused_images):
            size = sizes.get(img, 'N/A')
            print(f"  • {img} ({size})")
    else:
        print("  ¡Todas las imágenes están siendo utilizadas!")
    
    # Imágenes grandes (> 1MB)
    large_images = []
    for img, size in sizes.items():
        try:
            size_bytes = parse_size(size)
            if size_bytes > 1024 * 1024:  # > 1MB
                large_images.append((img, size, size_bytes))
        except:
            continue
    
    # Ordenar por tamaño descendente
    large_images.sort(key=lambda x: x[2], reverse=True)
    
    print(f"\n📏 IMÁGENES GRANDES (>1MB) - {len(large_images)} archivos:")
    for img, size, _ in large_images:
        status = "🚫 NO USADA" if img in unused_images else "✅ EN USO"
        print(f"  • {img} ({size}) - {status}")
    
    # Estadísticas por carpeta
    print(f"\n📁 DISTRIBUCIÓN POR CARPETA:")
    folders = defaultdict(int)
    folder_unused = defaultdict(int)
    
    for img in all_images:
        folder = '/'.join(img.split('/')[:-1])
        folders[folder] += 1
        if img in unused_images:
            folder_unused[folder] += 1
    
    for folder in sorted(folders.keys()):
        total = folders[folder]
        unused = folder_unused[folder]
        used = total - unused
        print(f"  • {folder}: {total} total ({used} usadas, {unused} no usadas)")

if __name__ == "__main__":
    main()
