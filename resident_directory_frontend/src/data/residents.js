/**
 * Local mock residents dataset used by the app (no backend).
 * Images are simple generated initials by default; avatarUrl is optional.
 */

// PUBLIC_INTERFACE
export const RESIDENTS = [
  { id: "r-001", name: "Aaliyah Johnson", age: 34, unit: "A-102", phone: "(555) 010-1201", email: "aaliyah.johnson@example.com" },
  { id: "r-002", name: "Benjamin Carter", age: 41, unit: "B-307", phone: "(555) 010-1202", email: "ben.carter@example.com" },
  { id: "r-003", name: "Chloe Nguyen", age: 29, unit: "C-210", phone: "(555) 010-1203", email: "chloe.nguyen@example.com" },
  { id: "r-004", name: "Daniel Rodriguez", age: 52, unit: "A-401", phone: "(555) 010-1204", email: "daniel.rodriguez@example.com" },
  { id: "r-005", name: "Emma Patel", age: 27, unit: "D-118", phone: "(555) 010-1205", email: "emma.patel@example.com" },
  { id: "r-006", name: "Fatima Ali", age: 38, unit: "B-214", phone: "(555) 010-1206", email: "fatima.ali@example.com" },
  { id: "r-007", name: "Gabriel Martinez", age: 46, unit: "C-009", phone: "(555) 010-1207", email: "gabriel.martinez@example.com" },
  { id: "r-008", name: "Hannah Kim", age: 31, unit: "A-215", phone: "(555) 010-1208", email: "hannah.kim@example.com" },
  { id: "r-009", name: "Isaac Thompson", age: 24, unit: "B-111", phone: "(555) 010-1209", email: "isaac.thompson@example.com" },
  { id: "r-010", name: "Jasmine Brooks", age: 33, unit: "D-402", phone: "(555) 010-1210", email: "jasmine.brooks@example.com" },

  { id: "r-011", name: "Kai Williams", age: 36, unit: "C-312", phone: "(555) 010-1211", email: "kai.williams@example.com" },
  { id: "r-012", name: "Liam O'Connor", age: 44, unit: "A-008", phone: "(555) 010-1212", email: "liam.oconnor@example.com" },
  { id: "r-013", name: "Maya Chen", age: 28, unit: "B-222", phone: "(555) 010-1213", email: "maya.chen@example.com" },
  { id: "r-014", name: "Noah Davis", age: 57, unit: "D-125", phone: "(555) 010-1214", email: "noah.davis@example.com" },
  { id: "r-015", name: "Olivia Scott", age: 39, unit: "C-221", phone: "(555) 010-1215", email: "olivia.scott@example.com" },
  { id: "r-016", name: "Priya Singh", age: 26, unit: "A-313", phone: "(555) 010-1216", email: "priya.singh@example.com" },
  { id: "r-017", name: "Quentin Hughes", age: 48, unit: "B-410", phone: "(555) 010-1217", email: "quentin.hughes@example.com" },
  { id: "r-018", name: "Rosa Hernandez", age: 62, unit: "D-011", phone: "(555) 010-1218", email: "rosa.hernandez@example.com" },
  { id: "r-019", name: "Samuel Green", age: 30, unit: "C-105", phone: "(555) 010-1219", email: "samuel.green@example.com" },
  { id: "r-020", name: "Tara Evans", age: 35, unit: "A-220", phone: "(555) 010-1220", email: "tara.evans@example.com" },

  { id: "r-021", name: "Umar Farooq", age: 40, unit: "B-005", phone: "(555) 010-1221", email: "umar.farooq@example.com" },
  { id: "r-022", name: "Valentina Rossi", age: 29, unit: "D-301", phone: "(555) 010-1222", email: "valentina.rossi@example.com" },
  { id: "r-023", name: "William Turner", age: 51, unit: "C-409", phone: "(555) 010-1223", email: "william.turner@example.com" },
  { id: "r-024", name: "Ximena Lopez", age: 23, unit: "A-115", phone: "(555) 010-1224", email: "ximena.lopez@example.com" },
  { id: "r-025", name: "Yara Abdel", age: 32, unit: "B-308", phone: "(555) 010-1225", email: "yara.abdel@example.com" },
  { id: "r-026", name: "Zachary Price", age: 45, unit: "D-208", phone: "(555) 010-1226", email: "zachary.price@example.com" },
  { id: "r-027", name: "Amir Hassan", age: 37, unit: "C-017", phone: "(555) 010-1227", email: "amir.hassan@example.com" },
  { id: "r-028", name: "Bianca Silva", age: 27, unit: "A-512", phone: "(555) 010-1228", email: "bianca.silva@example.com" },
  { id: "r-029", name: "Caleb Foster", age: 34, unit: "B-109", phone: "(555) 010-1229", email: "caleb.foster@example.com" },
  { id: "r-030", name: "Diana Park", age: 42, unit: "D-415", phone: "(555) 010-1230", email: "diana.park@example.com" },

  { id: "r-031", name: "Ethan Murphy", age: 28, unit: "C-214", phone: "(555) 010-1231", email: "ethan.murphy@example.com" },
  { id: "r-032", name: "Farah Nasser", age: 55, unit: "A-209", phone: "(555) 010-1232", email: "farah.nasser@example.com" },
  { id: "r-033", name: "Gianna Bell", age: 31, unit: "B-317", phone: "(555) 010-1233", email: "gianna.bell@example.com" },
  { id: "r-034", name: "Henry Adams", age: 63, unit: "D-006", phone: "(555) 010-1234", email: "henry.adams@example.com" },
  { id: "r-035", name: "Ivy Cooper", age: 26, unit: "C-119", phone: "(555) 010-1235", email: "ivy.cooper@example.com" },
  { id: "r-036", name: "Jonah Lee", age: 33, unit: "A-304", phone: "(555) 010-1236", email: "jonah.lee@example.com" },
  { id: "r-037", name: "Khadija Omar", age: 47, unit: "B-201", phone: "(555) 010-1237", email: "khadija.omar@example.com" },
  { id: "r-038", name: "Leo Brown", age: 22, unit: "D-219", phone: "(555) 010-1238", email: "leo.brown@example.com" },
  { id: "r-039", name: "Marisol Vega", age: 36, unit: "C-314", phone: "(555) 010-1239", email: "marisol.vega@example.com" },
  { id: "r-040", name: "Nina Shah", age: 49, unit: "A-412", phone: "(555) 010-1240", email: "nina.shah@example.com" }
];
