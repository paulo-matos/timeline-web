'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        id="media"
        type="file"
        name="coverUrl"
        accept="image/*"
        onChange={onFileSelected}
        className="invisible h-0 w-0"
      />

      {preview && (
        // eslint disabled because there's no need to optimize image rendering, since the image is in the user's device
        // eslint-disable-next-line
        <img
          alt=""
          src={preview}
          className="aspect-video w-full rounded-lg object-contain"
        />
      )}
    </>
  )
}
