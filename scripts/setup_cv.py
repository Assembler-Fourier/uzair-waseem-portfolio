from __future__ import annotations

import os
import subprocess
import sys
import venv
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
VENV_DIR = ROOT / ".venv-cv"


def environment_python() -> Path:
    if os.name == "nt":
        return VENV_DIR / "Scripts" / "python.exe"
    return VENV_DIR / "bin" / "python"


def main() -> None:
    if not environment_python().exists():
        venv.EnvBuilder(with_pip=True).create(VENV_DIR)
    command = [
        str(environment_python()),
        "-m",
        "pip",
        "install",
        "--requirement",
        str(ROOT / "requirements-cv.txt"),
    ]
    subprocess.run(command, check=True, cwd=ROOT)
    print(f"CV environment ready: {VENV_DIR}")


if __name__ == "__main__":
    main()
