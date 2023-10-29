module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', 'jsx', 'tsx'],
        alias: {
          '@Atom': './src/components/Atom',
          '@Molecule': './src/components/Molecule',
          '@Organism': './src/components/Organism',
          '@Assets': './src/assets',
          '@Navigators': './src/navigators',
          "@Containers": "./src/containers",
          "@Services": "./src/services",
          '@Theme': './src/theme',
        },
      },
    ],
  ],
};
