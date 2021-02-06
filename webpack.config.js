import { resolve } from 'path'

export const entry = './src/index.js'
export const output = {
  filename: 'main.js',
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, 'dist')
}
export const module = {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|gif|jpeg)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }
  ]
}
