import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts'

export function handler(req: Request) {
    return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 128,
          background: 'lavender',
          padding: '122px'
        }}
      >
        OG image generation with supabase!
      </div>
    )
  )
}