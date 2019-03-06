module.exports = {
  size: {
    font: {
      xsmall: { value: 10 },
      small: { value: 14 },
      medium: { value: 16 },
      large: { value: 20 },
      xlarge: { value: 28 },
      base: { value: '{size.font.medium.value}' }
    },
    lineHeight: {
      xsmall: { value: '{size.small.value}' },
      small: { value: '{size.medium.value}' },
      medium: { value: '{size.large.value}' },
      large: { value: '{size.xlarge.value}' },
      xlarge: { value: '{size.huge.value}' },
      base: { value: '{size.lineHeight.medium.value}' }
    },
    fontWeight: {
      regular: { value: 400 },
      bold: { value: 700 }
    }
  }
};
