import React, { useState, ChangeEvent, FormEvent } from "react";

interface ContactProps {
  language: "KO" | "EN";
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  fields: string[];
  additionalInfo: string;
  file: File | null;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  fields?: string;
  // 다른 필드의 에러도 추가할 수 있습니다.
}

const translations = {
  KO: {
    labels: {
      name: "이름",
      company: "회사명",
      email: "Email",
      phone: "전화번호",
      fields: "분야 선택",
      additionalInfo: "추가 전달 사항",
      file: "파일 첨부",
      submit: "문의 보내기",
    },
    fieldsOptions: [
      "IT 프로젝트 컨설팅(PMO)",
      "플랫폼 서비스 기획",
      "서비스 리뉴얼",
      "서비스 유지 보수(운영)",
      "사용자 리서치",
      "마케팅",
      "기타",
    ],
    errors: {
      name: "이름을 입력해 주세요.",
      company: "회사명을 입력해 주세요.",
      email: "유효한 이메일을 입력해 주세요.",
      phone: "전화번호를 입력해 주세요.",
      fields: "적어도 하나의 분야를 선택해야 합니다.",
    },
  },
  EN: {
    labels: {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone Number",
      fields: "Select Fields",
      additionalInfo: "Additional Information",
      file: "Attach File (Under 10MB)",
      submit: "Submit",
    },
    fieldsOptions: [
      "Field1",
      "Field2",
      "Field3",
      "Field4",
      "Field5",
      "Field6",
      "Field7",
    ],
    errors: {
      name: "Please enter your name.",
      company: "Please enter your company name.",
      email: "Please enter a valid email.",
      phone: "Please enter your phone number.",
      fields: "At least one field must be selected.",
    },
  },
};

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    fields: [],
    additionalInfo: "",
    file: null,
  });
  const [agreed, setAgreed] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});

  const {
    labels,
    fieldsOptions,
    errors: translationErrors,
  } = translations[language];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // 에러 상태 초기화
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      fields: checked
        ? [...prev.fields, value]
        : prev.fields.filter((field) => field !== value),
    }));
    // 에러 상태 초기화
    if (checked || (!checked && formData.fields.length > 1)) {
      setErrors((prev) => ({ ...prev, fields: undefined }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 10 * 1024 * 1024) {
      alert(
        language === "KO"
          ? "파일 크기는 10MB 이하이어야 합니다."
          : "File size must be under 10MB."
      );
      return;
    }
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // 필수 필드 유효성 검사
    if (!formData.name.trim()) {
      newErrors.name = translationErrors.name;
    }
    if (!formData.company.trim()) {
      newErrors.company = translationErrors.company;
    }
    if (!formData.email.trim()) {
      newErrors.email = translationErrors.email;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = translationErrors.email;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = translationErrors.phone;
    }
    if (formData.fields.length === 0) {
      newErrors.fields = translationErrors.fields;
    }

    // 다른 유효성 검사도 여기에 추가할 수 있습니다.

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!agreed) {
      alert(
        language === "KO"
          ? "개인정보 수집 및 이용 동의를 체크해주세요."
          : "Please check the personal information collection and use agreement."
      );
      return;
    }

    console.log(formData.file);
    alert(JSON.stringify(formData, null, 2));
    // 여기에 폼 제출 로직을 추가하세요

    // 폼 제출 후 초기화 (선택 사항)
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      fields: [],
      additionalInfo: "",
      file: null,
    });
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="bg-black flex flex-col items-center px-4 py-8 md:px-8 md:py-16"
    >
      <div className="w-full max-w-4xl">
        <div className="text-white font-pretendard text-2xl md:text-4xl font-black leading-snug tracking-wide">
          간편 문의하기
        </div>
        <div className="text-white font-pretendard text-2xl md:text-4xl font-black leading-snug tracking-wide">
          부담없이 언제든 문의해주세요!
        </div>

        <div className="text-white font-pretendard text-base md:text-lg font-normal leading-relaxed mt-4 md:mt-9">
          사용자와 클라이언트의 니즈가 만나 New Business의 가치를 만들어 낼
          때까지 치열하게 고민하는 티슈만의 서비스 디자인 방법론으로
          서포트하겠습니다.
        </div>

        <div className="w-full p-4 md:p-8 rounded-lg mt-8 md:mt-28">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-white font-pretendard text-xl md:text-2xl font-bold leading-snug">
              Step 01.
            </div>
            <div className="text-white font-pretendard text-xl md:text-2xl font-bold leading-snug">
              기본 정보를 남겨주세요.
            </div>

            <div className="text-white font-pretendard text-sm md:text-base font-medium leading-snug mt-2 md:mt-4">
              언론 홍보, 인터뷰 요청, 세미나 요청, 마케팅업무, 개발사 협조 등을
              의뢰할 수 있습니다.
            </div>

            <div className="h-4 md:h-9"></div>

            <InputField
              label={labels.name}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              error={errors.name}
            />
            <InputField
              label={labels.company}
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              error={errors.company}
            />
            <InputField
              label={labels.email}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
            />
            <InputField
              label={labels.phone}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              error={errors.phone}
            />

            <div className="h-6 md:h-12"></div>

            <div className="text-white font-pretendard text-xl md:text-2xl font-bold leading-snug">
              Step 02.
            </div>
            <p className="text-white font-pretendard text-xl md:text-2xl font-bold leading-snug">
              의뢰하고 싶으신 분야를 선택해주세요.{" "}
              <span className="ml-1 text-sm md:text-base">
                (중복 선택 가능)
              </span>
            </p>

            <div className="h-4 md:h-9"></div>

            <CheckboxGroup
              label={labels.fields}
              options={fieldsOptions}
              selectedOptions={formData.fields}
              onChange={handleFieldChange}
              error={errors.fields}
            />

            <div className="h-6 md:h-12"></div>

            <div className="text-white font-pretendard text-xl md:text-2xl font-bold leading-snug mt-8 md:mt-28">
              Step 03.
            </div>
            <div className="text-white font-pretendard text-xl md:text-2xl font-bold leading-snug">
              프로젝트에 대해 저희가 더 알아야하는 내용이 있다면 편하게
              알려주세요.
            </div>
            <TextareaField
              label={labels.additionalInfo}
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
            <FileUpload label={labels.file} onChange={handleFileChange} />

            <div className="h-6 md:h-12"></div>

            <p className="max-w-full md:max-w-2xl text-white font-pretendard text-sm md:text-base font-medium whitespace-pre-line border-b border-white pb-4 md:pb-15">
              {`개인정보 수집 및 이용 동의

유한회사 티슈는  『개인정보보호법』 제 15조 및 22조 등 관련 법령을 준수하며, 이용자 권익 보호에 최선을 다하고 있습니다. 

1. 개인정보의 수집·이용 목적
의뢰인님의 프로젝트에 대한 문의에 대한 정보가 보다 정확한 답변을 위해 수집됩니다.

2. 수집·이용하는 개인정보 항목
필수 항목 : 성명, 회사/기업, 이메일, 휴대전화, 직함, 의뢰 내용
선택항목 : 첨부파일, 링크

3. 개인정보의 보유 및 이용기간
원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
보존 이유 : 의뢰인님의 동의를 통한 인재 정보 유지
보존 기간 : 정보 삭제 요청 시까지

4. 개인정보 수집·이용 동의 거부에 대한 안내
위 개인정보 중 필수적 정보의 수집·이용에 관한 동의는 의뢰를 위하여 필수적이므로, 위 사항에 동의하셔야만 의뢰가 가능합니다.
              `}
            </p>

            <div className="h-2 md:h-5"></div>

            <div className="flex items-center mb-4 md:mb-8">
              <div
                className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center cursor-pointer mr-2"
                onClick={() => setAgreed(!agreed)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  fill="#ffffff"
                  className="w-6 h-6 md:w-8 md:h-8"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={agreed ? "#00FF02" : "#ffffff"}
                    strokeWidth="5"
                  />
                  <path
                    d="M30 50 L45 65 L70 40"
                    fill="none"
                    stroke={agreed ? "#00FF02" : "#ffffff"}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <label
                className="text-white text-sm md:text-base font-pretendard font-medium leading-snug cursor-pointer"
                onClick={() => setAgreed(!agreed)}
              >
                <span className="underline">개인정보 수집 및 이용 동의</span>에
                동의합니다 (필수)
              </label>
            </div>

            <div className="h-8 md:h-20"></div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="flex w-full max-w-xs md:max-w-sm px-6 py-3 justify-center items-center gap-2 rounded-full border border-[#0F0] bg-[#0D0D0D] text-white font-pretendard text-lg md:text-xl font-medium leading-snug"
              >
                {labels.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: ChangeEvent<HTMLInputElement>["onChange"];
  required?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  required = false,
  error,
}) => (
  <div className="flex flex-col md:flex-row items-start md:items-center">
    <label
      className="w-full md:w-32 text-sm md:text-lg font-bold leading-snug mb-1 md:mb-0"
      htmlFor={name}
    >
      {label}:{required && <span className="text-red-500"> *</span>}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full mt-1 md:mt-0 md:ml-4 p-2 border-b-2 border-white bg-transparent outline-none focus:outline-none text-gray-300 text-sm md:text-base font-bold leading-snug ${
        error ? "border-red-500" : "border-white"
      }`}
    />
    {error && (
      <span className="text-red-500 text-xs md:text-sm mt-1 md:mt-0 md:ml-4">
        {error}
      </span>
    )}
  </div>
);

interface CheckboxGroupProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChange: ChangeEvent<HTMLInputElement>["onChange"];
  error?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  selectedOptions,
  onChange,
  error,
}) => (
  <div className="flex flex-col max-w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {options.map((option) => (
        <div
          key={option}
          className={`flex w-full h-12 px-4 py-2 justify-center items-center gap-2 rounded-full border ${
            selectedOptions.includes(option)
              ? "border-green-500"
              : "border-white"
          } bg-[#0D0D0D] hover:cursor-pointer`}
          onClick={() =>
            onChange({
              target: {
                value: option,
                checked: !selectedOptions.includes(option),
              },
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          <div
            className={`w-full text-sm md:text-[15px] font-medium text-center ${
              selectedOptions.includes(option) ? "text-green-500" : "text-white"
            }`}
          >
            {option}
          </div>
        </div>
      ))}
    </div>
    {error && (
      <span className="text-red-500 text-xs md:text-sm mt-2">{error}</span>
    )}
  </div>
);

interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEvent<HTMLTextAreaElement>["onChange"];
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  value,
  onChange,
}) => (
  <div className="flex flex-col">
    <label className="font-medium text-sm md:text-base mb-1" htmlFor={name}>
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`추가 전달 내용이 있으시면 말씀해 주세요. (선택 사항)
회사 홈페이지 및 참고 홈페이지 URL`}
      className="p-4 border border-white rounded-3xl bg-[#0D0D0D] w-full max-w-full md:max-w-2xl min-h-48 md:min-h-60 text-gray-300 text-sm md:text-base font-medium leading-relaxed resize-none"
    />
  </div>
);

interface FileUploadProps {
  label: string;
  onChange: ChangeEvent<HTMLInputElement>["onChange"];
}

const FileUpload: React.FC<FileUploadProps> = ({ label, onChange }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onChange(e);
    }
  };

  return (
    <div className="max-w-full md:max-w-2xl">
      {fileName && (
        <div className="ml-2 mb-2 text-white text-xs md:text-sm self-end text-right">
          {fileName}
        </div>
      )}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 w-6 h-6 md:w-6 md:h-6"
          >
            <path
              d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59718 21.9983 8.005 21.9983C6.41282 21.9983 4.88584 21.3658 3.76 20.24C2.63416 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63416 12.8758 3.76 11.75L12.95 2.56C13.7006 1.80943 14.7185 1.38776 15.78 1.38776C16.8415 1.38776 17.8594 1.80943 18.61 2.56C19.3606 3.31057 19.7823 4.32855 19.7823 5.39C19.7823 6.45145 19.3606 7.46943 18.61 8.22L9.41 17.41C9.03472 17.7853 8.52573 17.9961 7.995 17.9961C7.46427 17.9961 6.95528 17.7853 6.58 17.41C6.20472 17.0347 5.99389 16.5257 5.99389 15.995C5.99389 15.4643 6.20472 14.9553 6.58 14.58L15.07 6.1"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-sm md:text-base">
            <div>제안요청서 또는 기타파일이 있다면 전달 부탁드립니다.</div>
            <div>PDF, ZIP, JPG, PPT, XLS, DOC, HWP, PNG / 최대 10MB</div>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <div
            className="flex w-36 md:w-40 h-10 px-6 py-2 justify-center items-center gap-1 flex-shrink-0 rounded-xl border border-green-500 bg-[#0D0D0D] text-white text-sm md:text-base font-medium leading-snug cursor-pointer"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            {label}
          </div>
          <input
            id="file-upload"
            type="file"
            accept=".pdf,.zip,.jpg,.ppt,.xls,.doc,.hwp,.png"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
