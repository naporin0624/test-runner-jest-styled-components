import { styleSheetSerializer } from "jest-styled-components/serializer";

module.exports = {
  test(val) {
    return styleSheetSerializer.test(val);
  },
  serializer(...args) {
    return styleSheetSerializer.serializer(...args);
  },
};
