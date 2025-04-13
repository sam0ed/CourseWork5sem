import React from 'react'
import '../styles/index.css';

export default function License() {
    return (
        <div className="page-container text-primary p-md">
            <h1 className="title-small text-center mb-auto">
                MIT License
            </h1>
            <p>
                Copyright (c) OpenAI <a href="https://policies.google.com/privacy?hl=en-US" className="underline italic">(https://openai.com)</a>
            </p>
            <p className="mt-auto mb-auto">
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
            </p>
            <p className="mt-auto mb-auto">
                The above copyright notice and this permission notice shall be included in
                all copies or substantial portions of the Software.
            </p>
            <p className="mt-auto mb-auto">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                THE SOFTWARE.
            </p>

            <h1 className="title-small text-center mt-auto mb-auto">
                Google
            </h1>
            <p>
                This license outlines the types of information collected by Google, the purposes of
                data usage, and privacy controls available to users. For the complete details, visit
                Google's <a href="https://policies.google.com/privacy?hl=en-US" className="underline italic"> Privacy Policy.</a>
            </p>
        </div>
    )
}
