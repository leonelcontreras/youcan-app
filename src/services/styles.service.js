const StyleService = () => {
  const getStyles = (theme) => {
    const primaryColor = {
      color: theme.primaryColor
    }

    const fontColor = {
      color: theme.fontColor
    }

    const fontColorError = {
      color: theme.redColor
    }

    const primaryButton = {
      backgroundColor: theme.primaryColor,
      borderColor: theme.primaryColor100
    }

    const inputError = {
      borderColor: theme.redColor,
      color: theme.redColor
    }

    const primaryText = {
      color: theme.secundaryColor
    }

    const marginTop10 = {
      marginTop: 10
    }

    const marginTop20 = {
      marginTop: 20
    }

    return {
      primaryColor,
      primaryText,
      primaryButton,
      fontColor,
      fontColorError,
      inputError,
      marginTop10,
      marginTop20
    }
  }

  return {
    getStyles
  }
}

export default StyleService
