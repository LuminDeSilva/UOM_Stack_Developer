import zipfile
import os

def compress_folder(folder_path, zip_path):
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zip_file:
        for root, _, files in os.walk(folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                zip_file.write(file_path, os.path.relpath(file_path, folder_path))

    print(f"Folder compressed successfully to {zip_path}")

# Example usage
folder_path = '/path/to/folder'
zip_path = '/path/to/compressed_folder.zip'

compress_folder(folder_path, zip_path)
