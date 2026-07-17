from __future__ import annotations

import os
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def local_python() -> Path:
    if os.name == "nt":
        return ROOT / ".venv-cv" / "Scripts" / "python.exe"
    return ROOT / ".venv-cv" / "bin" / "python"


def main() -> None:
    if not sys.argv[1:]:
        raise SystemExit("Provide a Python module or script to run.")
    interpreter = local_python() if local_python().exists() else Path(sys.executable)
    result = subprocess.run([str(interpreter), *sys.argv[1:]], cwd=ROOT)
    raise SystemExit(result.returncode)


if __name__ == "__main__":
    main()
