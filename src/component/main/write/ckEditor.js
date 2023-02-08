import React, { useState } from 'react';
import { CKEditor } from 'ckeditor4-react';
import Offcanvas from './offcanvas';
function CKEditorUI() {
    const [content, setContent] = useState('');
    const styles = {
        width: "95%",
        height: "100%",
    };
    return (
        <div className='ckeditor-parent' style={styles}>
            <CKEditor
                data={content}
                onChange={(evt) => setContent(evt.editor.getData())}
                config={{
                    extraPlugins: 'colorbutton',
                }}
                style={{ borderColor: 'blue' }}
            />
          <Offcanvas></Offcanvas>
        </div>
    );
}

export default CKEditorUI;
