import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { useInstallPrompt } from '../hooks/useInstallPrompt';

export function InstallPrompt() {
  const { installPrompt, promptInstall, isInstalled } = useInstallPrompt();
  const [dismissed, setDismissed] = useState(false);

  if (!installPrompt || isInstalled || dismissed) {
    return null;
  }

  const handleInstall = async () => {
    const installed = await promptInstall();
    if (installed) {
      setDismissed(true);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-blue-600 text-white rounded-lg shadow-2xl p-4 z-50 animate-slide-up">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Download className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm mb-1">Install CARNET App</h3>
          <p className="text-xs text-blue-100 mb-3">
            Install CARNET on your device for quick access to your health information anytime.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="px-4 py-2 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
              data-testid="button-install-app"
            >
              Install
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="px-4 py-2 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
              data-testid="button-dismiss-install"
            >
              Maybe Later
            </button>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 text-blue-200 hover:text-white"
          data-testid="button-close-install"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
