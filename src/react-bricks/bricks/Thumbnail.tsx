import React from "react"
import { types, Text, RichText } from "react-bricks/frontend"

interface ThumbnailProps {
    hasShadow: boolean
    bgColor: types.IColor
}

const Thumbnail: types.Brick<ThumbnailProps> = ({ hasShadow, bgColor }) => {
    return <div>
        <Text
            propName="title"
            renderBlock={({ children }) => <h1>{children}</h1>}
            placeholder="type something"
        // multiline={false} : boolean
        // softLineBreak={false} : boolean
        />
        <RichText
            propName="description"
            renderBlock={({ children }) => (
                <p>{children}</p>
            )}
            placeholder="Type a description"
            allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Highlight,
                types.RichTextFeatures.Italic
            ]}
            renderHighlight={({ children }) => (
                <span>
                    {children}
                </span>
            )}
        />
    </div>
}

Thumbnail.schema = {
    name: 'thumbnail',
    label: 'Thumbnail',
    getDefaultProps: () => ({
        title: 'Hello, world!',
        description: 'Lorem ipsum dolor sit amet.',
        hasShadow: true,
        bgColor: { color: '#ffffff', className: 'bg-white' }
    }),
    sideEditProps: [
        {
            name: 'hasShadow',
            label: 'Shadow',
            type: types.SideEditPropType.Boolean,
        },
        {
            name: 'bgColor',
            label: 'Background',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Color,
                options: [
                    {
                        label: 'White',
                        value: { color: '#ffffff', className: 'bg-white' },
                    },
                    {
                        label: 'Light blue',
                        value: { color: '#eff6ff', className: 'bg-blue-50' },
                    },
                ],
            },
        },
    ],
}

export default Thumbnail