import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface IconData {
  name: string;
  tags: string[];
  categories: string[];
}

interface IconJson {
  tags?: string[];
  categories?: string[];
}

// Path from script location to project root, then to lucide/icons
const iconsDirectory = path.join(__dirname, "../../../../../lucide/icons");
const outputPath = path.join(__dirname, "../data/icons-data.json");

function processIcons(): IconData[] {
  const iconFiles = fs
    .readdirSync(iconsDirectory)
    .filter((file) => file.endsWith(".json"));

  const icons: IconData[] = [];

  for (const file of iconFiles) {
    const iconName = path.basename(file, ".json");
    const filePath = path.join(iconsDirectory, file);

    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const iconJson: IconJson = JSON.parse(fileContent);

      const tags: string[] =
        iconJson.tags && Array.isArray(iconJson.tags) ? [...iconJson.tags] : [];

      const categories: string[] =
        iconJson.categories && Array.isArray(iconJson.categories)
          ? [...iconJson.categories]
          : [];

      icons.push({
        name: iconName,
        tags: tags,
        categories: categories,
      });
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  // Sort by name for consistent output
  icons.sort((a, b) => a.name.localeCompare(b.name));

  return icons;
}

// Main execution
const icons = processIcons();

// Write output to file
fs.writeFileSync(outputPath, JSON.stringify(icons, null, 2), "utf-8");

console.log(`Processed ${icons.length} icons`);
console.log(`Output written to: ${outputPath}`);
