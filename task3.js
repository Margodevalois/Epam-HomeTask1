const validateData = (key, value, load) => {
    return load.some(entry => {
        return (
          entry.text &&
          entry.text.payload &&
          entry.text.payload[key] &&
          JSON.stringify(entry.text.payload[key]) === JSON.stringify(value)
        );
      });
};
