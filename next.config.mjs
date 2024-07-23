// next.config.mjs
import path from 'path';

const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'static/media',
                        publicPath: '/_next/static/media',
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
