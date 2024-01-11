import type { TestRunnerConfig } from '@storybook/test-runner'

const config: TestRunnerConfig = {
  async postVisit(page) {
    const elementHandler = await page.$('#storybook-root')
    if (elementHandler === null) throw new Error('element not found')

    const innerHTML = await elementHandler.innerHTML()

    expect(innerHTML).toMatchSnapshot()
  },
}

export default config
