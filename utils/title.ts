/**
 * Returns a full HTML title, appending the site name
 * to the page title given.
 *
 * @param pageTitle HTML title of the current page
 * @returns Full HTML title, including localized site name
 */
export const title = (pageTitle: string): string => {
  const { t } = useI18n()

  return `${pageTitle} | ${t('app_title')}`
}

/**
 * Returns a translated page HTML title. You must declare
 * the key/value pair in your translation messages. This
 * function appends the localized site name to the title.
 *
 * @param locKey translation key
 * @returns the localized HTML title, including site name
 */
export const localizedTitle = (locKey: string): string => {
  const { t } = useI18n()
  const localizedPageTitle = t(locKey)

  return title(localizedPageTitle)
}
