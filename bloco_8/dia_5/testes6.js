const getPosition = (latitude, longitude) => {
  return {
    latitude,
    longitude,
  };
};

console.log(getPosition(-19.8157, -43.9542));

// Sem return
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));