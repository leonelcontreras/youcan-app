const StyleService = () => {
  const getStyles = (theme) => {
    const primaryColorClass = {
      color: theme.primaryColor
    }

    const lightPurpleColorClass = {
      color: theme.lightPurple
    }

    const fontColorClass = {
      color: theme.fontColor
    }

    const fontColorErrorClass = {
      color: theme.red
    }

    const primaryClass = {
      color: theme.primaryColor,
      borderColor: theme.primaryColor
    }

    const secoundaryClass = {
      color: theme.secundaryColor,
      borderColor: theme.secundaryColor
    }

    const inputErrorClass = {
      borderColor: theme.red,
      color: theme.red
    }

    const primaryTextClass = {
      color: theme.secundaryColor
    }

    const marginTop10Class = {
      marginTop: 10
    }

    const marginTop20Class = {
      marginTop: 20
    }

    return {
      ...theme,
      primaryColorClass,
      lightPurpleColorClass,
      primaryTextClass,
      primaryClass,
      secoundaryClass,
      fontColorClass,
      fontColorErrorClass,
      inputErrorClass,
      marginTop10Class,
      marginTop20Class
    }
  }

  return {
    getStyles
  }
}

export default StyleService
