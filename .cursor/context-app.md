# 📚 Reading Dashboard – Complete UI System (Desktop + Mobile)

You are designing a modern SaaS Reading Dashboard interface.

This is a productivity web application for tracking books, organizing categories, and managing reading progress.

Follow ALL design rules strictly.

Base unit: 1rem = 16px.

---

# 🎯 Design Goal

Create a clean, modern, productivity-focused reading dashboard.

The interface must feel:
- Organized
- Calm
- Professional
- Clean
- Highly usable
- Focused on reading productivity
- Minimal but structured

Avoid:
- Visual clutter
- Excessive colors
- Heavy shadows
- Marketing/landing page style
- Playful UI

---

# 🎨 DESIGN SYSTEM

## Primary Color

Primary: #ff0000

Use:
- Primary-500 for main actions
- Primary-600 for hover
- Primary-100 for soft backgrounds

---

## Neutrals

Gray 50 → 900 scale.

Background:
- App background: gray-50 (#f9fafb)
- Cards: white

---

# 🔤 Typography

Font:
Inter, system-ui, sans-serif

Scale:
- Hero heading: 1.75rem (700)
- Section heading: 1.375rem (600)
- Sub heading: 1.125rem (600)
- Body: 0.875rem–1rem
- Caption: 0.75rem

Line height:
- Headings: 1.3
- Body: 1.6

---

# 📐 SPACING SYSTEM

Use 0.5rem grid (8px base).

Spacing scale:
0.25rem  
0.5rem  
0.75rem  
1rem  
1.5rem  
2rem  
3rem  
4rem  

---

# 🖥 DESKTOP LAYOUT

Three-column layout:

| Sidebar (15rem) | Main Content (flex) | Aside (20rem) |

Full page padding: 2rem  
Grid gap: 1.5rem  

---

## Sidebar

Width: 15rem  
Padding: 1.5rem  
Background: white  
Border-right: 1px solid gray-200  

Navigation item:
- Height: 2.5rem
- Border-radius: 0.625rem
- Padding: 0 0.75rem
- Display: flex
- Align: center
- Gap: 0.75rem

Active:
- Background: primary-100
- Color: primary-600

Hover:
- Background: gray-100

---

## Topbar

Height: 4.5rem  
Padding horizontal: 2rem  

Layout:
Flex
Space-between
Align center

Search:
- Height: 2.75rem
- Border-radius: 0.75rem
- Padding: 0 1rem
- Background: gray-100

---

## Main Content

Scrollable vertically.

### Section 1 — Recommended

Horizontal scroll list.

Book card:
- Cover: 8.75rem x 12.5rem
- Border-radius: 0.75rem
- Shadow: subtle
- Title clamp 2 lines
- Author: gray-500

Hover:
- Scale: 1.02
- Lift: -0.25rem

---

### Section 2 — Categories

Tabs:
- Height: 2.25rem
- Padding: 0 1rem
- Border-radius: 62.5rem

Active:
- Background: primary-500
- Color: white

Grid below:
Responsive auto-fill
Gap: 1rem

---

## Aside — Featured Book

Width: 20rem  
Padding: 1.5rem  
Border-radius: 1rem  
Background: primary-500  
Color: white  

CTA Button:
- Height: 2.75rem
- Border-radius: 0.75rem
- Background: white
- Color: primary-600

Hover:
- TranslateY(-0.125rem)

---

# 📱 MOBILE VERSION

Mobile breakpoint strategy:
Max-width: 48rem

Layout becomes single column.

---

## Mobile Structure

Topbar  
Main Content  
Bottom Navigation (optional)

Sidebar becomes:
→ Slide drawer  
OR  
→ Hidden behind menu icon  

Aside becomes:
→ Full-width card below content  

---

## Mobile Topbar

Height: 3.5rem  
Padding: 0 1rem  

Left:
- Menu icon

Center:
- App title

Right:
- Avatar OR notification icon

---

## Mobile Search

Full width input:
- Height: 2.75rem
- Border-radius: 0.75rem
- Margin-bottom: 1rem

---

## Mobile Recommended

Horizontal scroll preserved.

Book card:
- Slightly smaller cover:
  7rem x 10rem
- Same radius: 0.75rem

---

## Mobile Categories

Tabs scroll horizontally.

Grid becomes:
2 columns
Gap: 0.75rem

---

## Mobile Featured Book

Becomes full-width card:

Width: 100%  
Border-radius: 1rem  
Padding: 1.25rem  

CTA:
Full width button

---

## Mobile Bottom Navigation (Optional)

Height: 3.75rem  
Position: fixed bottom  
Background: white  
Border-top: 1px solid gray-200  

Items:
- Discover
- Library
- Favorites
- Profile

Each item:
- Icon + label
- Active state:
  primary-500

---

# 🎛 COMPONENT RULES

Buttons:
Height: 2.75rem  
Border-radius: 0.75rem  
Transition: all 0.2s ease  

Cards:
Border-radius: 0.75rem  
Hover lift desktop only  
No hover animation on mobile  

Shadow:
0 0.25rem 0.5rem rgba(0,0,0,0.08)

---

# 🎥 Micro Interactions

Desktop:
- Hover lift
- Scale 1.02
- Smooth 0.2s–0.3s transitions

Mobile:
- Tap feedback only
- No hover animations

Avoid:
- Bounce
- Excessive animations
- Gradient overload

---

# 🧠 UX INTENT

This is a productivity dashboard.

It must feel:
- Fast
- Clean
- Structured
- Focused
- Functional

White space is mandatory.

Hierarchy must be obvious.

No visual noise.

---

# 🏷 Mood Keywords

Modern SaaS  
Reading Focused  
Minimal  
Structured  
Clean  
Confident  
Calm  

---

Generate a fully responsive dashboard layout based strictly on the system above.