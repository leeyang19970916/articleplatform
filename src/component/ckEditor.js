import React, { useState } from 'react';
import { CKEditor } from 'ckeditor4-react';

function CKEditorUI() {
    const [content, setContent] = useState('');
    return (
        <div>
            <CKEditor
                data={content}
                onChange={(evt) => setContent(evt.editor.getData())}
                config={{
                    extraPlugins: 'colorbutton',
                    // colorButton_colors: 'FF00FF,FFFF00,00FFFF,FF0000,00FF00,0000FF'
                }}
            />
            <div>
            </div>
        </div>
    );
}

export default CKEditorUI;
