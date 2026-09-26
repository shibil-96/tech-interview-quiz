/**
 * Processes photo dimensions based on Facebook minimum size criteria.
 * @param {number} L - Minimum required side length
 * @param {Array<{W: number, H: number}>} photos - Array of photo dimensions
 * @returns {Array<string>} Results array containing "UPLOAD ANOTHER", "ACCEPTED", or "CROP IT"
 */
function checkPhotos(L, photos) {
  return photos.map(photo => {
    const { W, H } = photo;
    
    if (W < L || H < L) {
      return "UPLOAD ANOTHER";
    } else if (W === H) {
      return "ACCEPTED";
    } else {
      return "CROP IT";
    }
  });
}

// Example Usage matching sample:
const L = 180;
const photos = [
  { W: 640, H: 480 },
  { W: 120, H: 300 },
  { W: 180, H: 180 }
];

const results = checkPhotos(L, photos);
results.forEach(res => console.log(res));
