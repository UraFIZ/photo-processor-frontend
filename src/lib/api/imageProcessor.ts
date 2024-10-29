// src/lib/api/imageProcessor.ts
export async function removeBackground(file: File): Promise<string> {
  try {
    const formData = new FormData();
    formData.append('file', file); // Make sure the key is 'file' to match FastAPI parameter

    const response = await fetch('https://photo-processor-backend-api.azurewebsites.net', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        // Don't set Content-Type with FormData, browser will set it automatically
      },
      credentials: 'omit'
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to remove background');
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error removing background:', error);
    throw new Error('Failed to process image');
  }
}