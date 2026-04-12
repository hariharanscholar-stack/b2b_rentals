# B2B Rentals Layout Structure

## Overview
This layout follows the Figma design specifications with a flex-based structure that ensures:
- Header stays at the top (sticky)
- Main content grows with content
- Footer always stays at the bottom

## Structure

```
MainLayout (min-h-screen flex flex-col)
├── Header (sticky top-0)
│   ├── AnnouncementBar (black bar with contact info)
│   └── Navigation (yellow menu bar)
├── Main (flex-grow)
│   └── {children} (page content goes here)
└── Footer (mt-auto)
    └── Footer Container (contact, links, copyright)
```

## Components

### MainLayout
- **Location**: `src/components/layout/MainLayout.tsx`
- **Purpose**: Root layout wrapper with flex column
- **Props**: `children: ReactNode`

### Header
- **Location**: `src/components/layout/Header.tsx`
- **Contains**: AnnouncementBar + Navigation
- **Position**: Sticky at top (z-50)

### AnnouncementBar
- **Location**: `src/components/layout/AnnouncementBar.tsx`
- **Height**: 45px
- **Background**: #181d25 (dark)
- **Content**: Email and phone contact info

### Navigation
- **Location**: `src/components/layout/Navigation.tsx`
- **Height**: 70px
- **Background**: #ffd371 (yellow)
- **Content**: Logo, menu items, CTA button

### Footer
- **Location**: `src/components/layout/Footer.tsx`
- **Background**: #f7f7f7 (light gray)
- **Sections**: 
  - Contact info (4 columns)
  - Links (4 columns: Logo/Social, Categories, Useful Links, Information)
  - Copyright

## Design Tokens

Colors are defined in `src/app/globals.css`:

```css
--primary-yellow: #ffd371
--secondary-dark: #232323
--gray-900: #181d25
--gray-700: #333d4c
--gray-500: #6c727f
--background-cream: #faf8ed
--background-gray: #f7f7f7
--primary-green: #7fae51
```

## Typography

Font: DM Sans (400, 500, 600, 700)
- Loaded via Next.js font optimization
- Applied globally in layout.tsx

## Usage

```tsx
import MainLayout from '@/components/layout/MainLayout';

export default function Page() {
  return (
    <MainLayout>
      {/* Your page content here */}
    </MainLayout>
  );
}
```

## Icons

Using `lucide-react` for consistent icon styling across the application.
