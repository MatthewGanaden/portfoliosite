/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(webm|mp4|ogg|avi)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/videos/', // This is where your video files will be stored in the build
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
