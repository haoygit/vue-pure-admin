// @ts-check

/** @type {import("@commitlint/types").UserConfig} */
export default {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  },
  prompt: {
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :',
      breaking:
        '列出任何突破性重大变更 Breaking Changes（可选）。使用 "|" 换行 :',
      footerPrefixesSelect: "选择关联 issue 前缀（可选）:",
      customFooterPrefix: "输入自定义 issue 前缀 :",
      footer: "列出关联 issue (例如: #31, #34)（可选）:",
      confirmCommit: "是否提交或直接按 Enter 键继续？"
    },
    types: [
      {
        value: "feat",
        name: "feat:     ✨ 新增功能 | A new feature",
        emoji: ":sparkles:"
      },
      {
        value: "fix",
        name: "fix:      🐛 修复缺陷 | A bug fix",
        emoji: ":bug:"
      },
      {
        value: "docs",
        name: "docs:     📝 文档更新 | Documentation only changes",
        emoji: ":memo:"
      },
      {
        value: "style",
        name: "style:    💄 代码格式 | Format (white-space, formatting, etc)",
        emoji: ":lipstick:"
      },
      {
        value: "refactor",
        name: "refactor: ♻️  代码重构 | A code change that neither fixes a bug nor adds a feature",
        emoji: ":recycle:"
      },
      {
        value: "perf",
        name: "perf:     ⚡️ 性能提升 | A code change that improves performance",
        emoji: ":zap:"
      },
      {
        value: "test",
        name: "test:     ✅ 测试相关 | Adding missing tests or correcting existing tests",
        emoji: ":white_check_mark:"
      },
      {
        value: "build",
        name: "build:    📦 构建相关 | Changes that affect the build system or external dependencies",
        emoji: ":package:"
      },
      {
        value: "ci",
        name: "ci:       🎡 持续集成 | Changes to our CI configuration files and scripts",
        emoji: ":ferris_wheel:"
      },
      {
        value: "revert",
        name: "revert:   ⏪️ 回退代码 | Revert a previous commit",
        emoji: ":rewind:"
      },
      {
        value: "chore",
        name: "chore:    🔨 其他修改 | Other changes that don't modify src or test files",
        emoji: ":hammer:"
      }
    ],
    useEmoji: true
  }
};
