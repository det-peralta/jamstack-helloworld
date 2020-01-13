## Setup on Ubuntu
1. Install **NVM**:

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash```

2. Setup **NVM**: 

```export NVM_DIR="$HOME/.nvm"```

```[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"```

```[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"```

3. Install and Select **Node.js** version:

```nvm install 10```

```nvm use 10```

4. Install **gatsby-cli**:

```npm install -g gatsby-cli```

5. Create a **Gatsby Site**:

```gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world```

### JAMStack

"Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers."

![Jamstack Arch](https://res.cloudinary.com/cloudinary-marketing/image/upload/c_fill,w_770/dpr_1.0,f_auto,fl_lossy,q_auto/v1/Web_Assets/blog/JAMstack-Delivers-v1.png)
in https://cloudinary.com/blog/developer_experience_for_a_modern_web_jamstack_delivers

- https://jamstack.org/
- https://jamstack.wtf/

### Deploy 

"**ZEIT** is the easiest way to deploy websites. Host your web projects with zero configuration, automatic SSL, and global CDN."
- https://zeit.co/ 

## References

- https://www.youtube.com/watch?v=Y8PXMbr0Kqo
- https://youtu.be/4OQsw96OVpo