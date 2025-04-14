import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}

export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                }}
            >
                <img
                    src="public/icon-32.png"
                    alt="RD Logo"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
} 