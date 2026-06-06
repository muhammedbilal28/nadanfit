/* NadanFit CSS Design System */
:root {
    --bg-color: #0b0f19;
    --card-bg: rgba(22, 28, 45, 0.65);
    --card-border: rgba(255, 255, 255, 0.06);
    --card-hover-border: rgba(6, 182, 212, 0.3);
    
    --primary: #06b6d4;      /* Vibrant Cyan */
    --primary-glow: rgba(6, 182, 212, 0.15);
    --secondary: #10b981;    /* Emerald Green */
    --secondary-glow: rgba(16, 185, 129, 0.15);
    
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    
    --accent-orange: #f59e0b;
    --accent-red: #ef4444;
    
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Inter', sans-serif;
    
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --glass-blur: blur(16px);
}
/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-body);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    position: relative;
    line-height: 1.5;
}
/* Ambient Background Blobs */
.ambient-blobs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
}
.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.15;
    animation: drift 25s infinite alternate ease-in-out;
}
.blob-1 {
    top: -10%;
    left: -10%;
    width: 50vw;
    height: 50vw;
    background: var(--primary);
    animation-duration: 20s;
}
.blob-2 {
    bottom: -10%;
    right: -10%;
    width: 60vw;
    height: 60vw;
    background: var(--secondary);
    animation-duration: 25s;
    animation-delay: 2s;
}
.blob-3 {
    top: 40%;
    left: 50%;
    width: 35vw;
    height: 35vw;
    background: var(--accent-orange);
    opacity: 0.08;
    animation-duration: 30s;
    animation-delay: 5s;
}
@keyframes drift {
    0% { transform: translate(0, 0) scale(1) rotate(0deg); }
    100% { transform: translate(5%, 8%) scale(1.1) rotate(360deg); }
}
/* Scrollbar Styles */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar-track {
    background: rgba(11, 15, 25, 0.5);
}
::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.3);
    border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
}
/* Layout Elements */
.app-header {
    border-bottom: 1px solid var(--card-border);
    backdrop-filter: var(--glass-blur);
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(11, 15, 25, 0.8);
}
.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
.logo-icon {
    font-size: 1.8rem;
}
.logo-text {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: -0.5px;
}
.logo-highlight {
    color: var(--secondary);
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.tagline {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
}
.main-container {
    flex: 1;
    max-width: 1200px;
    width: 100%;
    margin: 2rem auto;
    padding: 0 2rem;
}
/* Glassmorphic Cards */
.form-container-card, .stats-dashboard-card, .planner-header-card, .day-plan-card, .sidebar-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    backdrop-filter: var(--glass-blur);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    padding: 2.5rem;
    transition: var(--transition-smooth);
}
/* Form Styles */
.form-container-card {
    max-width: 750px;
    margin: 0 auto;
}
.card-header {
    margin-bottom: 2rem;
    text-align: center;
}
.card-header h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, var(--text-primary), var(--text-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.card-header p {
    color: var(--text-secondary);
    font-size: 1rem;
}
.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}
@media (max-width: 640px) {
    .form-grid {
        grid-template-columns: 1fr;
    }
}
.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.form-group label {
    font-family: var(--font-heading);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-secondary);
}
.form-group input, .form-group select {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid var(--card-border);
    border-radius: 10px;
    color: var(--text-primary);
    padding: 0.8rem 1rem;
    font-family: var(--font-body);
    font-size: 1rem;
    outline: none;
    transition: var(--transition-smooth);
}
.form-group input:focus, .form-group select:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-glow);
    background: rgba(15, 23, 42, 0.8);
}
/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: var(--transition-smooth);
    width: 100%;
}
.btn-submit {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: #0b0f19;
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.2);
}
.btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(16, 185, 129, 0.35);
}
.btn-submit:active {
    transform: translateY(0);
}
.btn-primary {
    background: var(--primary);
    color: #0b0f19;
}
.btn-primary:hover {
    background: #0891b2;
    transform: translateY(-2px);
}
.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
    border: 1px solid var(--card-border);
}
.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--text-secondary);
}
.btn-icon {
    width: 1.2rem;
    height: 1.2rem;
}
/* Results Section Dashboard */
.results-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.stats-dashboard-card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}
.dashboard-title-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
.status-indicator {
    width: 12px;
    height: 12px;
    background-color: var(--secondary);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--secondary);
}
.dashboard-header h2 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
}
.calorie-badge {
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.1));
    border: 1px solid var(--secondary);
    color: var(--secondary);
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 800;
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.1);
}
/* Calorie Gauge visualizer */
.gauge-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}
.gauge-label-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--text-secondary);
}
.gauge-label-row strong {
    color: var(--text-primary);
}
.calorie-gauge-outer {
    height: 12px;
    background: rgba(15, 23, 42, 0.8);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--card-border);
}
.calorie-gauge-inner {
    height: 100%;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    border-radius: 6px;
    width: 0%;
    transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.gauge-caption {
    font-size: 0.85rem;
    color: var(--text-muted);
}
/* Stats Cards Grid */
.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}
@media (max-width: 640px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
}
.stat-card {
    background: rgba(15, 23, 42, 0.4);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}
.stat-icon {
    font-size: 2rem;
}
.stat-info {
    display: flex;
    flex-direction: column;
}
.stat-title {
    font-size: 0.85rem;
    color: var(--text-secondary);
}
.stat-value {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    font-weight: 700;
}
.bmi-badge {
    margin-left: auto;
    font-family: var(--font-heading);
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    text-transform: uppercase;
}
.bmi-normal { background: rgba(16, 185, 129, 0.15); color: var(--secondary); border: 1px solid var(--secondary); }
.bmi-underweight { background: rgba(6, 182, 212, 0.15); color: var(--primary); border: 1px solid var(--primary); }
.bmi-overweight { background: rgba(245, 158, 11, 0.15); color: var(--accent-orange); border: 1px solid var(--accent-orange); }
.bmi-obese { background: rgba(239, 68, 68, 0.15); color: var(--accent-red); border: 1px solid var(--accent-red); }
/* Weekly Layout Grid */
.weekly-layout-grid {
    display: grid;
    grid-template-columns: 1.7fr 1fr;
    gap: 2rem;
}
@media (max-width: 1024px) {
    .weekly-layout-grid {
        grid-template-columns: 1fr;
    }
}
/* Planner Column */
.planner-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.planner-header-card {
    padding: 1rem 1.5rem;
}
.tabs-scroll-container {
    overflow-x: auto;
    width: 100%;
}
.day-tabs {
    display: flex;
    gap: 0.5rem;
    min-width: max-content;
    padding: 0.25rem 0;
}
.day-tab-btn {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    cursor: pointer;
    transition: var(--transition-smooth);
}
.day-tab-btn:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.03);
}
.day-tab-btn.active {
    background: var(--primary);
    color: #0b0f19;
    box-shadow: 0 4px 12px var(--primary-glow);
}
/* Day Plan Content Card */
.day-plan-card {
    padding: 2.5rem;
}
.day-plan-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--card-border);
    padding-bottom: 1.2rem;
    margin-bottom: 1.5rem;
}
.day-plan-header h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
}
.total-cal-tag {
    background: rgba(255, 255, 255, 0.05);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.95rem;
}
/* Day Macros */
.day-macros-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
}
@media (max-width: 480px) {
    .day-macros-container {
        grid-template-columns: 1fr;
    }
}
.macro-stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
.macro-label {
    font-size: 0.8rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    font-weight: 600;
}
.macro-val {
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 700;
}
.macro-bar-outer {
    height: 4px;
    background: rgba(15, 23, 42, 0.6);
    border-radius: 2px;
}
.macro-bar-inner {
    height: 100%;
    border-radius: 2px;
}
.carb-bar { background-color: #3b82f6; }
.protein-bar { background-color: var(--secondary); }
.fat-bar { background-color: var(--accent-orange); }
/* Meals List Inside Plan Card */
.meals-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.meal-item-card {
    background: rgba(15, 23, 42, 0.4);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 1.5rem;
    transition: var(--transition-smooth);
}
.meal-item-card:hover {
    border-color: var(--card-hover-border);
    box-shadow: 0 4px 15px rgba(6, 182, 212, 0.05);
}
.meal-item-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}
.meal-icon-label {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.meal-calories {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1rem;
    color: var(--text-primary);
}
.meal-dish-name {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.3;
}
.local-name {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 400;
    margin-left: 0.5rem;
}
.meal-ingredients-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
}
.meal-ingredients-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
}
.bullet-point {
    width: 6px;
    height: 6px;
    background-color: var(--secondary);
    border-radius: 50%;
}
.ing-qty {
    font-weight: 700;
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.04);
    padding: 0.15rem 0.5rem;
    border-radius: 6px;
    font-size: 0.85rem;
}
.ing-name {
    color: var(--text-secondary);
}
.meal-macros-chips {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}
.macro-chip {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
}
.carb-chip { background: rgba(59, 130, 246, 0.1); color: #60a5fa; }
.protein-chip { background: rgba(16, 185, 129, 0.1); color: #34d399; }
.fat-chip { background: rgba(245, 158, 11, 0.1); color: #fbbf24; }
.meal-tip-alert {
    background: rgba(6, 182, 212, 0.05);
    border-left: 3px solid var(--primary);
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    border-radius: 0 8px 8px 0;
    color: var(--text-secondary);
}
/* Sidebar Columns */
.sidebar-column {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.sidebar-card h3 {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}
.sidebar-card p {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}
/* Shopping List */
.shopping-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-height: 400px;
    overflow-y: auto;
    padding-right: 0.5rem;
}
.shopping-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}
.shop-item-name {
    font-size: 0.95rem;
    color: var(--text-secondary);
    text-transform: capitalize;
    transition: var(--transition-smooth);
}
.shop-item-qty {
    font-weight: 700;
    font-size: 0.9rem;
    background: rgba(16, 185, 129, 0.1);
    color: var(--secondary);
    padding: 0.2rem 0.6rem;
    border-radius: 8px;
    flex-shrink: 0;
}
/* Shopping tabs styling */
.shopping-tabs {
    display: flex;
    background: rgba(15, 23, 42, 0.4);
    border: 1px solid var(--card-border);
    border-radius: 8px;
    padding: 0.25rem;
    margin-bottom: 1.25rem;
}
.shop-tab-btn {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-family: var(--font-heading);
    font-size: 0.85rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: var(--transition-smooth);
}
.shop-tab-btn:hover {
    color: var(--text-primary);
}
.shop-tab-btn.active {
    background: rgba(255, 255, 255, 0.05);
    color: var(--primary);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
/* Checkbox styling */
.shop-checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    font-size: 0.95rem;
    user-select: none;
    text-align: left;
}
.shop-checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
.checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 18px;
    width: 18px;
    background-color: rgba(15, 23, 42, 0.6);
    border: 1px solid var(--card-border);
    border-radius: 4px;
    transition: var(--transition-smooth);
}
.shop-checkbox-container:hover input ~ .checkmark {
    border-color: var(--primary);
}
.shop-checkbox-container input:checked ~ .checkmark {
    background-color: var(--secondary);
    border-color: var(--secondary);
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.shop-checkbox-container input:checked ~ .checkmark:after {
    display: block;
}
.shop-checkbox-container .checkmark:after {
    left: 5px;
    top: 2px;
    width: 6px;
    height: 10px;
    border: solid #0b0f19;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.shop-checkbox-container input:checked ~ .shop-item-name {
    text-decoration: line-through;
    color: var(--text-muted);
}
/* Controls Stack */
.controls-btn-stack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}
/* Footer styling */
.app-footer {
    border-top: 1px solid var(--card-border);
    padding: 2rem;
    text-align: center;
    color: var(--text-muted);
    font-size: 0.85rem;
    margin-top: auto;
}
/* Helper Utilities */
.hidden {
    display: none !important;
}
/* Animations */
.animate-slide-up {
    animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-fade-in {
    animation: fadeIn 0.4s ease-out forwards;
}
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
/* Spin animation for Regeneration */
.rotating svg {
    animation: spin 0.6s linear;
}
@keyframes spin {
    100% { transform: rotate(360deg); }
}
/* --- PRINT AND PDF STYLES --- */
.print-only {
    display: none;
}
@media print {
    body {
        background: #ffffff !important;
        color: #000000 !important;
        font-size: 12pt;
    }
    .ambient-blobs, .app-header, .form-container-card, .app-footer, 
    #results-section .stats-dashboard-card, #results-section .weekly-layout-grid {
        display: none !important;
    }
    .print-only {
        display: block !important;
    }
    #print-plan-container {
        width: 100%;
        margin: 0;
        padding: 20px;
    }
    .print-header {
        border-bottom: 2px solid #000000;
        padding-bottom: 10px;
        margin-bottom: 30px;
        text-align: center;
    }
    .print-header h1 {
        font-size: 24pt;
        margin-bottom: 5px;
    }
    .print-header p {
        font-size: 11pt;
        color: #555555;
    }
    .print-day-block {
        page-break-inside: avoid;
        margin-bottom: 30px;
        border: 1px solid #cccccc;
        padding: 15px;
        border-radius: 8px;
    }
    .print-day-block h2 {
        border-bottom: 1px solid #dddddd;
        padding-bottom: 5px;
        margin-bottom: 15px;
        font-size: 16pt;
    }
    .print-meals-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
    .print-meal-box {
        border-bottom: 1px dashed #eeeeee;
        padding-bottom: 10px;
    }
    .print-meal-box h3 {
        font-size: 11pt;
        color: #333333;
        margin-bottom: 5px;
    }
    .print-meal-box p {
        font-weight: bold;
        font-size: 11pt;
        margin-bottom: 5px;
    }
    .print-meal-box ul {
        padding-left: 20px;
        font-size: 10pt;
    }
    .print-shopping-list {
        page-break-before: always;
        margin-top: 30px;
    }
    .print-shopping-list h2 {
        border-bottom: 2px solid #000000;
        padding-bottom: 5px;
        margin-bottom: 15px;
    }
    .print-shop-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        font-size: 10pt;
    }
}
