import { Header } from "../components/header";
import { Game } from "../components/game-new/game";
import { UiTextField } from "../components/uikit/ui-text-field";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <UiTextField
        label="Label1"
        placeholder="placeholder"
        required
        helperText="Helper Text"
        errorText="Error text"
        
      />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
