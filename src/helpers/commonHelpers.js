export const getBeforeDecimal = rating => {
  const digit = Number(rating);
  return Math.trunc((digit * 10) / 10);
};

export const getAfterDecimal = rating => {
  const digit = Number(rating);
  return Math.trunc((digit * 10) % 10);
};

export const getQueryStringParams = query => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce((params, param) => {
        let [key, value] = param.split('=');
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
      }, {})
    : {};
};
