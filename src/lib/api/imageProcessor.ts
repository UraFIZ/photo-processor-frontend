// src/lib/api/imageProcessor.ts
export async function removeBackground(file: File): Promise<string> {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://photo-processor-backend-api.azurewebsites.net/api/remove-background', {
      method: 'POST',
      body: formData,
      mode: 'cors',  // Add this
      headers: {
        'Origin': 'https://urafiz.github.io'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to remove background');
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}