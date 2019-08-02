[![Build Status](https://travis-ci.org/Itee/itee-ui.svg?branch=master)](https://travis-ci.com/Itee/itee-ui)
___

# <center>[Itee UI]</center>

The itee ui contain all stuff related to client view. It contain a react plugin, and a vue plugin.


## How to install

From npm:

    npm install itee-ui

If you want to build the repository from source follow these instructions:

    git clone https://github.com/Itee/itee-ui.git
    npm install
    npm run build
        
## How to use

First of all, you should take a look to the documentation ! In case you have clone the repository you could auto-generate the library documentation using: 

    npm run doc

then you will be able to use like this:

    import Vue from 'vue'
    import { TDialog } from 'itee-ui'
    
    const clientApp = new Vue( TDialog ).$mount( '#itee-application-root' )

## License (BSD-3-Clause)

**Copyright (c) 2015-Present, Itee, Valcke Tristan [https://github.com/Itee](https://github.com/Itee). All rights reserved.**

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- Neither the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

You should have received a copy of the [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) along 
with this program.  If not, see [https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause).