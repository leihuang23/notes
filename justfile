# List available commands
default:
    @just --list

# Build the TiddlyWiki
build:
    (cd ~ && tiddlywiki notes --build index)

# Start development server on port 8080
dev:
    #!/usr/bin/env bash
    cd ~ && \
    if lsof -ti:8080 > /dev/null; then \
        echo "Port 8080 is in use. Killing processes..." && \
        lsof -ti:8080 | xargs kill -9 && \
        echo "Processes using port 8080 have been terminated." && \
        sleep 1; \
    fi && \
    tiddlywiki notes --listen & \
    sleep 2 && open http://127.0.0.1:8080

# Build and upload changes
upload: build
    git add . && \
    git commit -m "update notes" && \
    git push