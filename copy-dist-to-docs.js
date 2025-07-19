import fs from "fs-extra";

async function copy() {
  try {
    await fs.remove("docs");
    await fs.copy("dist", "docs");
    console.log("Copied dist to docs successfully");
  } catch (error) {
    console.error("Error copying dist to docs:", error);
    process.exit(1);
  }
}

copy();
