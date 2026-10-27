"""
Cut the background out of car photos for Abujacars cards.

    pip install "rembg[cpu]" pillow
    python scripts/remove-bg.py public/cars/my-new-car.jpg [more.jpg ...]

Writes a tightly-cropped transparent PNG to public/cars/cut/<name>.png,
which you then reference as `cutout` in lib/cars.ts.
"""
import os
import sys

from PIL import Image
from rembg import new_session, remove

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "cars", "cut")


def main(files):
    session = new_session("isnet-general-use")
    os.makedirs(OUT, exist_ok=True)
    for f in files:
        cut = remove(Image.open(f).convert("RGB"), session=session, post_process_mask=True)
        bbox = cut.getchannel("A").point(lambda a: 255 if a > 20 else 0).getbbox()
        name = os.path.splitext(os.path.basename(f))[0]
        cut.crop(bbox).save(os.path.join(OUT, name + ".png"), optimize=True)
        print("✓", name)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    main(sys.argv[1:])
