# Contributing to This Project

Thank you for your interest in contributing! This document outlines the process for contributing to our project.

## Getting Started

1. Fork the repository
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes with clear, descriptive commit messages following our [commit message format](/etc/commitlint/docs/COMMIT_GUIDE.md)
6. Push to your fork
7. Submit a Pull Request

## Pull Request Guidelines

- Ensure your PR addresses a specific issue or adds value to the project
- Include a clear description of the changes
- Keep changes focused and atomic
- Follow existing code style and conventions
- Include tests if applicable
- Update documentation as needed
- Ensure your PR follows the [project's philosophy](/docs/overview.mdx)
- Use [Conventional Commits](/etc/commitlint/docs/COMMIT_GUIDE.md) format for all commit messages

## Code Style

- Follow the existing code formatting in the project (ensure you have Biome installed)
- Write clear, self-documenting code
- Add comments only when necessary to explain complex logic
- Use meaningful variable and function names

## Commit Message Format

This project follows the [Conventional Commits](/docs/GIT_COMMITS.md) specification. All commit messages must follow this format:

```
<type>(<scope>): <short summary>

<body>

<footer>
```

### Common Commit Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring without behavior changes
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Example:
```
feat(auth): add OAuth2 integration

Implement OAuth2 authentication flow with support for Google and GitHub providers.

Closes #123
```

For detailed guidelines, see our [commit message documentation](/docs/GIT_COMMITS.md).

## Reporting Issues

- Use the GitHub issue tracker
- Check if the issue already exists before creating a new one
- Provide a clear description of the issue
- Include steps to reproduce if applicable
- Add relevant labels

## Questions or Need Help?

Feel free to open an issue for questions or join our discussions. We're here to help!

## Code of Conduct

Please note that this project follows a Code of Conduct. By participating, you are expected to uphold this code.

Thank you for contributing!
