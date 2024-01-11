import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

export const resizedImage = async (imageUrl, newWidth = null, newHeight = null) => {
  try {
    let imageBlob;
    const response = await fetch(imageUrl);
    imageBlob = await response.blob();
    if (newHeight) {
      imageBlob = await resizeImage(imageBlob, newWidth, newHeight);
    }
    const resizedUrl = URL.createObjectURL(imageBlob);
    const link = document.createElement('a');
    link.href = resizedUrl;
    link.download = generateRandomString(32) + '.jpg';
    link.click();
  } catch (error) {
    console.error('Error loading image:', error);
  }
}

const resizeImage = async (originalBlob, targetWidth, targetHeight) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = URL.createObjectURL(originalBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      canvas.toBlob((blob) => resolve(blob), 'image/jpeg', 0.8);
    };
  });
};