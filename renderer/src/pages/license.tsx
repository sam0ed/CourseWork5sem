import React from 'react'

export default function License() {
    return (

        <div style={{ display: 'flex', flexDirection: 'column', color: 'rgba(174, 203, 250, 1)', padding: '10px 30px' }}>
            <h1 style={{ alignSelf: 'center', fontSize: '30px', fontWeight: 'bold' }}>
                MIT License
            </h1>
            <p>
                Copyright (c) OpenAI <a href="https://policies.google.com/privacy?hl=en-US" style={{ textDecoration: 'underline', fontStyle: 'italic' }}>(https://openai.com)</a>
            </p>
            <p style={{ marginTop: '15px' }}>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
            </p>
            <p style={{ marginTop: '15px' }}>
                The above copyright notice and this permission notice shall be included in
                all copies or substantial portions of the Software.
            </p>
            <p style={{ margin: '15px 0px' }}>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                THE SOFTWARE.
            </p>

            <h1 style={{ alignSelf: 'center', fontSize: '30px', fontWeight: 'bold' }}>
                Google
            </h1>
            <p>
                This license outlines the types of information collected by Google, the purposes of
                data usage, and privacy controls available to users. For the complete details, visit
                Google's <a href="https://policies.google.com/privacy?hl=en-US" style={{ textDecoration: 'underline', fontStyle: 'italic' }}> Privacy Policy.</a>

            </p>
        </div>
    )
}
