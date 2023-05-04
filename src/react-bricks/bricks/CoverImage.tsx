import React from "react"
import { types, Image } from "react-bricks/frontend"

import './coverImage.scss'

const CoverImage: types.Brick = () => {
    return <div>
        <Image
            propName="CoverImage"
            alt="Fallback alt tag"
            maxWidth={200}
            imageClassName="mb-6"
            renderWrapper={({ children, width, height }) => (
                <div className="coverImage">
                    {children}
                </div>
            )}
        />
    </div>
}

CoverImage.schema = {
    name: 'coverImage',
    label: 'CoverImage',
    sideEditProps: [],
}

export default CoverImage