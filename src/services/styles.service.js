const StyleService = () => {
  const getStyles = (theme) => {
    const primaryColor = {
      color: theme.primaryColor
    }
  
    const fontColor = {
      color: theme.fontColor
    }
  
    const primaryButton = {
      backgroundColor: theme.primaryColor,
      borderColor: theme.primaryColor100,
    }
  
    const primaryText = {
      color: theme.secundaryColor
    }

    const marginBotton10 = {
      marginBottom: 10
    }

    const marginBotton20 = {
      marginBottom: 20
    }

    return {
      primaryColor,
      primaryText,
      primaryButton,
      fontColor,
      marginBotton10,
      marginBotton20
    }
  }

  return {
    getStyles
  }
}

export default StyleService
