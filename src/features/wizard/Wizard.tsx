import { useTranslation } from "react-i18next";

import Button from "../../components/button";
import { Select } from "../../components/form";
import { ChangeEvent, FormEvent } from "@devstimate";
import {
  WizardContainer,
  Form,
  IntroText,
  SelectWrapper,
  FootNote,
} from "./style";

const Wizard: React.FC = () => {
  const { t } = useTranslation();

  const sizeTranslations = t("landing.wizard.size_options", {
    returnObjects: true,
  });
  const sizeOptions = [
    { value: "small", label: sizeTranslations[0] },
    { value: "medium", label: sizeTranslations[1] },
    { value: "large", label: sizeTranslations[2] },
  ];

  const stageTranslations = t("landing.wizard.stage_options", {
    returnObjects: true,
  });
  const stageOptions = [
    { value: "mvp", label: stageTranslations[0] },
    { value: "mmp", label: stageTranslations[1] },
  ];

  const platformTranslations = t("landing.wizard.platform_options", {
    returnObjects: true,
  });
  const platformOptions = [
    { value: "web", label: platformTranslations[0] },
    { value: "ios", label: platformTranslations[1] },
    { value: "android", label: platformTranslations[2] },
  ];

  const handleChange = (e: ChangeEvent) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <WizardContainer data-feature="wizard">
      <Form method="GET" action="/" onSubmit={handleSubmit}>
        <IntroText>{t("landing.wizard.intro")}</IntroText>

        <SelectWrapper>
          <Select
            id="size-select"
            name="app_size"
            options={sizeOptions}
            groupLabel="App size"
            onSelectChange={(e: ChangeEvent) =>
              dispatch(setSizeOption(e.target.value as Size))
            }
          />

          <Select
            id="stage-select"
            name="app_stage"
            options={stageOptions}
            groupLabel="App stage"
            onSelectChange={(e: ChangeEvent) =>
              dispatch(setStageOption(e.target.value as Stage))
            }
          />

          <Select
            id="platform-select"
            name="app_platform"
            options={platformOptions}
            groupLabel="App platform"
            onSelectChange={(e: ChangeEvent) =>
              dispatch(setPlatformOption(e.target.value as Platform))
            }
          />
        </SelectWrapper>

        <Button type="submit">{t("landing.wizard.button_label")}</Button>
      </Form>

      <FootNote>{t("landing.wizard.footnote")}</FootNote>
    </WizardContainer>
  );
};

export default Wizard;
