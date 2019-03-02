module.exports = function (api) {
  api.cache(true);

  const presets = [
    {
      'presets': [
        ['@babel/env', {
          'targets': {
            'node': 'current'
          }
        }]
      ]
    },
    {
      'presets': [
        ['@babel/react', {
          'targets': {
            'node': 'current'
          }
        }]
      ]
    }
  ];

  const plugins = [
  ];

  return {
    presets,
    plugins
  };
};