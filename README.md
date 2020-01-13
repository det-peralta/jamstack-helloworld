# Ubuntu
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