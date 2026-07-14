.PHONY: help install dev build preview deploy clean lint

# Default target
help:
	@echo "Available commands:"
	@echo ""
	@echo "  make install       Install dependencies"
	@echo "  make dev           Start development server"
	@echo "  make build         Build for production"
	@echo "  make preview       Preview production build locally"
	@echo "  make deploy        Deploy to GitHub Pages"
	@echo "  make clean         Clean build artifacts"
	@echo "  make lint          Check code quality"
	@echo ""

# Install dependencies
install:
	npm install

# Start development server
dev:
	npm run dev

# Build for production
build:
	npm run build

# Preview production build
preview: build
	npm run preview

# Deploy to GitHub Pages
deploy: build
	npm run deploy

# Clean build artifacts
clean:
	rm -rf dist/
	rm -rf node_modules/.vite/
	echo "✓ Clean complete"

# Lint/check code
lint:
	npm run lint --if-present || echo "No lint script configured"

# Install and develop in one command
init: install dev

# Build and preview in sequence
prod: build preview

.DEFAULT_GOAL := help
