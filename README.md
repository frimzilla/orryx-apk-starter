
# Orryx APK Starter (Expo + EAS)

This repo lets you generate a **downloadable APK** on demand using **Expo EAS** via **GitHub Actions**.

## Quick Start

1. **Create an Expo project on EAS** (or let `eas init` do it) and put the **Project ID** into `app.json` at `extra.eas.projectId`.
2. In your GitHub repo, add a secret named **EXPO_TOKEN** (generate at https://expo.dev/accounts/[your-account]/settings/access-tokens).
3. Push this repo to GitHub.
4. Go to **Actions → Build Android Internal APK (EAS)** → **Run workflow**.
5. When it finishes, download the APK from the workflow **Artifacts** (`orryx-internal-apk`).

> EAS with `distribution: internal` produces an **APK** for easy sideloading. For production releases to Play, switch to an **AAB** with a `production` profile.

## Local Builds (optional)

If you want a one-command local APK build:

```bash
npm install -g eas-cli
npm install
eas build -p android --profile internal --local --non-interactive
```

This requires the Android SDK/NDK & Java set up locally.

## Notes
- Ensure **Unknown Sources** is enabled on your Android device to install APKs.
- For signing, internal builds can use Expo-managed credentials. For Play Store release, set up your own keystore.
- The included `App.js` is a minimal placeholder for Orryx—replace with your app code.

