# 🎨 CARNET Logo Instructions

## How to Add Your Logo

### For Single-File HTML Version (CARNET.html)

**Step 1:** Place your logo file in the same directory as `CARNET.html`

**Step 2:** Rename your logo file to:
```
carnet-logo.png
```

**Supported formats:** PNG, JPG, SVG

**Recommended size:** 200px wide (will auto-scale)

---

### For Full React PWA Version

**Step 1:** Place your logo file in:
```
mobile-app-pwa/public/carnet-logo.png
```

**Step 2:** If your logo has a different name, update these files:

**In `src/pages/Login.tsx` (line 35):**
```typescript
<img src="/your-logo-name.png" alt="CARNET Logo" />
```

**In `CARNET.html` (line 110):**
```html
<img src="your-logo-name.png" alt="CARNET Logo" class="logo">
```

---

## Logo Specifications

**Recommended:**
- Width: 200-400px
- Height: 80-150px
- Format: PNG with transparent background
- File size: Under 100KB

**The logo will:**
- Appear on login screen
- Show centered above "Patient Health Portal" text
- Scale automatically for mobile devices

---

## Fallback Behavior

If logo file is not found:
- Single-file version shows "CARNET" text instead
- React PWA shows "CARNET" text instead
- App continues to work normally

---

## Quick Test

1. Add logo file as `carnet-logo.png`
2. Open `CARNET.html` in browser
3. Logo should appear on login screen
4. If not, check browser console for errors

---

**Note:** After adding the logo, no code changes needed - just refresh the page!
